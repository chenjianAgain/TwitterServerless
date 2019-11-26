#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { TwitterServerlessStack } from '../lib/twitter_serverless-stack';

const app = new cdk.App();
new TwitterServerlessStack(app, 'TwitterServerlessStack');