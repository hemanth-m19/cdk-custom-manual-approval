
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as pipelines from 'aws-cdk-lib/pipelines';

export interface ManualApprovalWithSNSProps {
  /**
   * Optional SNS topic to send notifications to when an approval is pending.
   * @default - no SNS topic
   * @internal | Author: Hemanth Mallareddy
   */
  readonly snsTopic?: sns.ITopic;
  /**
   * The comment to display with this manual approval.
   * @default - no comment
   * @internal | Author: Hemanth Mallareddy
   */
  readonly comment?: string;
}

/**
* A custom CodePipeline manual approval action that extends comments and sns topic props.
* 
* @internal | Author: Hemanth Mallareddy
*/
export class ManualApprovalWithSNS extends pipelines.Step implements pipelines.ICodePipelineActionFactory {
  private readonly props?: ManualApprovalWithSNSProps;

  constructor( id: string, props?: ManualApprovalWithSNSProps ) {
    super(id);
    this.props = props;
  }
  /**
   * Implementation of the ICodePipelineActionFactory interface.
   * This method creates the actual CodePipeline action.
   */
  public produceAction(stage: codepipeline.IStage, options: pipelines.ProduceActionOptions): pipelines.CodePipelineActionFactoryResult  {

    // Create the SNS notification action
    stage.addAction(new codepipeline_actions.ManualApprovalAction({
        actionName: options.actionName,
        additionalInformation: this.props?.comment,
        runOrder: options.runOrder,
        notificationTopic: this.props?.snsTopic,
    }));
    return { runOrdersConsumed: 1}
  }
}
