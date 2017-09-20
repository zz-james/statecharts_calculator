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

When a user clicks the equals sign in state 6, the statechart enters the Start state again.

However this is not quite the behaviour that is required because the user may wish to use the result of the calculation as the first operand in the next calculation. In which case, after a result is returned, the user will expect to click an operator button and then enter the second operand. 

The statechart needs to be extended to include a result state. Alse, after a user has entered the second operand, it should be possible to enter another operator without pressing the equals button. In other words, it would be possible to enter a sequence such as 3 + 4 - 2 = .
The statechard can be extended to that shown below.

![screen shot 2017-09-20 at 15 50 48](https://user-images.githubusercontent.com/1120870/30650713-8d60b776-9e1b-11e7-9459-c12a52491178.png)

In the version of the application given in chapter 3, if a user attempted to divide the first operand by zero then an alert message was displayed informing the user that division by zero is not allowed. A similar alert message can be made to appear by attaching an alert state to state 6. State 7 is entereed if the user attempts to divide the first operand by zero. Notice that this event takes priority over the events that lead from state 6 to state 4 or state 8.

![screen shot 2017-09-20 at 16 01 22](https://user-images.githubusercontent.com/1120870/30651270-19567d82-9e1d-11e7-911f-c11a0776bd79.png)

The cancel button can be clicked at any time and this will cause any operation being performed by the user to be abondoned and state 1 to be entered. An arrow attached to the outermost state will model this behaviour.

![screen shot 2017-09-20 at 16 04 03](https://user-images.githubusercontent.com/1120870/30651352-60005ee2-9e1d-11e7-90a0-af44c3a1a436.png)

The cancel entry button can be used to cancel the last operand entered. It does not cancel the last operator entered. Thus the button should only be enabled and available for use in states 2,3,5 and 6.


<table>
  <tr>
    <td colspan="9">A</td>
  </tr>
  <tr>
    <td align="center">User Interface Object</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
  </tr>
  <tr>
    <td align="left">CE (cancel entry)</td>
    <td>d</td>
    <td>e</td>
    <td>e</td>
    <td>d</td>
    <td>e</td>
    <td>e</td>
    <td>-</td>
    <td>d</td>
  </tr>
  <tr>
    <td align="left">% button</td>
    <td>d</td>
    <td>d</td>
    <td>e</td>
    <td>d</td>
    <td>d</td>
    <td>d</td>
    <td>-</td>
    <td>e</td>
  </tr>
</table>


|                        A               |
| ---------------------- | ------------- |
| User Interface Object  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| Content Cell  | Content Cell  |