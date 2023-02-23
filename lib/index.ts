// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface ManualapprovalProps {
  // Define construct properties here
}

export class Manualapproval extends Construct {

  constructor(scope: Construct, id: string, props: ManualapprovalProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'ManualapprovalQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
