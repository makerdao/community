// @flow

import { NavigationContext } from '../NavigationProvider';
import { useContext } from 'react';

export default function useNavigation(): any {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be within a NavigationProvider');
  }

  return context;
}
