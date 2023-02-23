# AWS CDK Custom CodePipeline Manual Approval

You should explore the contents of this project. It demonstrates a CDK Construct Library that includes a construct (`ManualApprovalWithSNS`)
which contains a custom CodePipeline manual approval action that extends comments and sns topic props.

The construct defines an interface (`ManualApprovalWithSNSProps`) to configure the additional comment and SNS topic.