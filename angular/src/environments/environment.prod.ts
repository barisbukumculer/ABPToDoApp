import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:/',
  redirectUri: baseUrl,
  clientId: 'TodoApp_App',
  responseType: 'code',
  scope: 'offline_access TodoApp',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'TodoApp',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:',
      rootNamespace: 'TodoApp',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
