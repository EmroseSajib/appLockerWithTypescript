import type { JSX } from 'react';

export const enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export type cardProps = {
  name: string;
  Icon: JSX.Element;
  bgcolor: string;
  loading: boolean;
  borderColor: string;
  count?: number | string;
};
