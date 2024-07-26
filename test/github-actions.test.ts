import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import* as GithubActions from "../lib/github_actions-stack";

test("Stack Created", () => {
    const app = new cdk.App();
    const stack = new GithubActionsStack(app, "MyTestStack");
    const template = Template.fromStack(stack);

    template.hasResourceProperties("AWS::Lambda::Function", {
        FunctionName: "cdk-lambda",
        Runtime: "nodejs16x",
        Handler: "index.handler",
        MemorySize: 128,
    });
});