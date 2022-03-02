import camelCase from 'lodash-es/camelCase';
import uniq from 'lodash-es/uniq';
import { FieldDefinition, Vocabulary, TypeDefinition } from './type-definition';

export function defaultSample(vocabulary: Vocabulary, fields: Array<FieldDefinition<any>>): any {
  const obj: Record<string, any> = {};

  for (const field of fields) {
    obj[camelCase(field.name)] = vocabulary[field.type].sample();
  }

  return obj;
}

export function getAllChildrenTypes(vocabulary: Vocabulary, type: string): string[] {
  let childrenTypes: string[] = [type];

  const fields = vocabulary[type].fields;

  if (fields) {
    for (const field of fields) {
      const granchildren = getAllChildrenTypes(vocabulary, field.type);

      childrenTypes = [...childrenTypes, ...granchildren];
    }
  }

  return uniq(childrenTypes);
}
