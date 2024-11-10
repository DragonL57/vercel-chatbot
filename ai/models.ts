// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gemini-1.5-flash-002',
    label: 'Gemini 1.5 flash 002',
    apiIdentifier: 'gemini-1.5-flash-002',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gemini-1.5-pro-002',
    label: 'Gemini 1.5 Pro 002',
    apiIdentifier: 'gemini-1.5-pro-002',
    description: 'For complex, multi-step tasks',
  },
  {
    id: 'gemini-1.5-pro-exp-0827',
    label: 'Gemini 1.5 Pro Experimental 0827',
    apiIdentifier: 'gemini-1.5-pro-exp-0827',
    description: 'Experimental pro model',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemini-1.5-flash-002';
