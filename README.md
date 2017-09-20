THIS IS A WORK IN PROGRESS WHICH I WILL FIX UP IN TIME

In chapter 3, a calculator application was introduced which characterised the bottom up approach to user interface development.

In this chapter, the same user interface objects will be used but the code that controls those objects will be designed using a statechart.

The aim will be to create an application that is easy to understand, easy to enhance and does not contain errors.

Furthermore, the application will be made easier to use because it will only allow a user to perform valid events at any given time.




The broad operation of the calculator is based on a user entering an operand then an operator, then another operand and then clicking the equals button to get a result.

This behaviour can be modelled by a statechart. The statechart starts in the state labelled 'start' and a user can click the number buttons or the decimal point button to begin entering the first operand.

The state label 'Operand 1' has a lower level of detail (which is indicated by the state variable B) which ensuers that a user can only enter valid operands. 

After an operand has been entered, the user can click an operator button and cause the 'Operator Entered' state to be entered.

The user can then start to enter a second operand and the 'Operand 2' state is entered. 

The 'Operand 2' state has a lower leverl of detail which will be similar to the 'Operand 1' state.

After entering the second operant, the equals button can be clicked and the result will be calculated and the Start stare will be entered again.

This is a simplistic view of the calculator.

![screen shot 2017-09-20 at 15 32 17](https://user-images.githubusercontent.com/1120870/30649744-ff6a2170-9e18-11e7-98f9-f604ce6b5d41.png)

The statechart needs to be extended to take into account negative numbers, dividing by zero, the Cancel button, the Cancel Entry button and the percent button.

The statechart above assumes that the operands are positive numbers. It is possible that a user may enter a negative number number before starting to enter either operands, by clicking the minus button. When the minus button is clicked before an operand is entered, the Readout field should be made to show a minus sign.

After the minus sign is displayed, the user can enter the operand as usual.The statechart can be extended with two additional 'Negative Number' states. Notice that when  user selects an operator and enters state 4, it is possible to select a different operator and remain in state 4. However is the minus button is selected in state 4 then this indicates that a negative number is about to be entered and not that the operator has been changed.

![screen shot 2017-09-20 at 15 43 34](https://user-images.githubusercontent.com/1120870/30650357-9534eb08-9e1a-11e7-8833-7cf6bf4a70dc.png)