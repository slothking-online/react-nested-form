import * as types from './components/types';
export type FieldType = {
  autosuggest: types.AutosuggestInterface;
  string: types.InputInterface;
  boolean: types.CheckboxInterface;
  integer: types.InputInterface;
  float: types.InputInterface;
  text: types.TextareaInterface;
  select: types.MultiSelectInterface | types.SingleSelectInterface;
  file: types.FileInterface;
  datetime: types.DatetimeInterface & types.DateInterface & types.TimeInterface;
  time: types.TimeInterface;
  date: types.DateInterface;
  reference: types.SingleSelectInterface;
  array: types.TagType;
};
export type FieldDefinition<Type extends keyof FieldType> = {
  name: string;
  onChange: (e: any) => void;
  value: any;
} & FieldType[Type];

export type FieldDescription =
  | {
      fieldType: 'autosuggest';
      name: string;
      content: FieldType['autosuggest'];
    }
  | {
      fieldType: 'string';
      name: string;
      content: FieldType['string'];
    }
  | {
      fieldType: 'boolean';
      name: string;
      content: FieldType['boolean'];
    }
  | {
      fieldType: 'integer';
      name: string;
      content: FieldType['integer'];
    }
  | {
      fieldType: 'float';
      name: string;
      content: FieldType['float'];
    }
  | {
      fieldType: 'text';
      name: string;
      content: FieldType['text'];
    }
  | {
      fieldType: 'select';
      name: string;
      content: FieldType['select'];
    }
  | {
      fieldType: 'file';
      name: string;
      content: FieldType['file'];
    }
  | {
      fieldType: 'datetime';
      name: string;
      content: FieldType['datetime'];
    }
  | {
      fieldType: 'time';
      name: string;
      content: FieldType['time'];
    }
  | {
      fieldType: 'date';
      name: string;
      content: FieldType['date'];
    }
  | {
      fieldType: 'reference';
      name: string;
      content: FieldType['reference'];
    }
  | {
      fieldType: 'array';
      name: string;
      content: FieldType['array'];
    };