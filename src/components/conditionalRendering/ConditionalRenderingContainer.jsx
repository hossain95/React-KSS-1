/* eslint-disable no-unused-vars */
import ConditionallyReturningJsx from "./1_conditionallyReturnJsx/ConditionallyReturningJsx";
import ConditionallyReturnNothing from "./2_conditionallyReturnNothing/ConditionallyReturnNothing";
import ConditionalTernaryOperator from "./3_conditionalTernaryOperator/ConditionalTernaryOperator";
import LogicalAndOperator from "./4_logicalAndOperator/LogicalAndOperator";
import ConditionallyAssigningJSXToVariable from "./5_conditionallyAssigningJSXToVariable/ConditionallyAssigningJSXToVariable";

export default function ConditionalRenderingContainer() {
  return (
    <div>
      <ConditionallyReturningJsx />
      {/* <ConditionallyReturnNothing /> */}
      {/* <ConditionalTernaryOperator /> */}
      {/* <LogicalAndOperator /> */}
      {/* <ConditionallyAssigningJSXToVariable /> */}
    </div>
  );
}
