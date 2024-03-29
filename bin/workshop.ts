#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { WorkshopStack } from '../lib/workshop-stack';

const app = new cdk.App();
new WorkshopStack(app, 'WorkshopStack');
