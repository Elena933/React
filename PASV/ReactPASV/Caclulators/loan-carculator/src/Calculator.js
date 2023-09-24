import React, {useState} from 'react';

function Calculator(props) {
    return(
        <ul >

            Amount<input type="number" />
            <button>Submit</button>
            Interest Rate<input type="number" />



        </ul>
    )
    // const [error, setError] = useState('');
    // const [results, setResults] = useState({
    //     monthlyPayment: '',
    //     totalPayment: '',
    //     totalInterest: '',
    //     isResult: false,
    // });
    // const [userValues, setUserValues] = useState({
    //     amount: '',
    //     interest: '',
    //     years: '',
    // });
    //
    // const handleInputChange = (event) =>
    //     setUserValues({ ...userValues, [event.target.name]: event.target.value });
    //
    // const handleSubmitValues = (e) => {
    //     e.preventDefault();
    //     if (isValid()) {
    //         setError('');
    //         calculateResults(userValues);
    //     }
    //
    // };
    //
    // const calculateResults = ({ amount, interest, years }) => {
    //     const userAmount = Number(amount);
    //     const calculatedInterest = Number(interest) / 100 / 12;
    //     const calculatedPayments = Number(years) * 12;
    //     const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    //     const monthly = (userAmount * x * calculatedInterest) / (x - 1);
    //
    //     if (isFinite(monthly)) {
    //         const monthlyPaymentCalculated = monthly.toFixed(2);
    //         const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
    //         const totalInterestCalculated = (monthly * calculatedPayments - userAmount).toFixed(2);
    //
    //         // Set up results to the state to be displayed to the user
    //         setResults({
    //             monthlyPayment: monthlyPaymentCalculated,
    //             totalPayment: totalPaymentCalculated,
    //             totalInterest: totalInterestCalculated,
    //             isResult: true,
    //         });
    //         return;
    //     }
    //
    // };
    // const isValid = () => {
    //     const { amount, interest, years } = userValues;
    //     let actualError = '';
    //     // Validate if there are values
    //     if (!amount || !interest || !years) {
    //         actualError = 'All the values are required';
    //     }
    //     // Validade if the values are numbers
    //     if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
    //         actualError = 'All the values must be a valid number';
    //     }
    //     // Validade if the values are positive numbers
    //     if (
    //         Number(amount) <= 0 ||
    //         Number(interest) <= 0 ||
    //         Number(years) <= 0
    //     ) {
    //         actualError = 'All the values must be a positive number';
    //     }
    //     if (actualError) {
    //         setError(actualError);
    //         return false;
    //     }
    //     return true;
    // };
    // return (
    //     <div>
    //
    //         <div>
    //             <div>
    //                 <label>Amount:</label>
    //                 <input
    //                     type='text'
    //                     name='amount'
    //                     placeholder='Loan amount'
    //                     value={userValues.amount}
    //                     onChange={handleInputChange}
    //
    //                 />
    //             </div>
    //             <div>
    //                 <label>Interest:</label>
    //                 <input
    //                     type='text'
    //                     name='interest'
    //                     placeholder='Interest'
    //                 />
    //             </div>
    //             <button onClick={handleSubmitValues}>Calculate</button>
    //
    //         </div>
    //         <div>
    //             <h4>
    //                 Loan amount: ${userValues.amount} <br/>
    //                 Interest:{userValues.interest}% <br/>
    //                 Years to repay: {userValues.years}
    //             </h4>
    //             <div>
    //                 <label>Monthly Payment:</label>
    //                 <input type='text' value={results.monthlyPayment} disabled/>
    //             </div>
    //             <div>
    //                 <label>Total Payment: </label>
    //                 <input type='text' value={results.totalPayment} disabled
    //                 />
    //             </div>
    //             <div>
    //                 <label>Total Interest:</label>
    //                 <input type='text' value={results.totalInterest} disabled
    //                 />
    //             </div>
    //
    //         </div>
    //     </div>
    // );
}

export default Calculator;
