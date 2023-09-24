import React, {useState} from "react";
import {useForm} from "react-hook-form";

function App() {
    // state to storage the values given by the user when filling the input fields
    const [userValues, setUserValues] = useState({
        amount: '',
        interest: '',
        years: '',
    });

    // state to storage the results of the calculation
    const [results, setResults] = useState({
        monthlyPayment: '',
        totalPayment: '',
        totalInterest: '',
        isResult: false,
    });

    // event handler to update state when the user enters values

    const handleInputChange = (event) =>
        setUserValues({ ...userValues, [event.target.name]: event.target.value });


    return (
        <div className='App'>

                <h1>Loan Calculator</h1>
                        <div className='form-items'>
                            <div>
                                <label id='label'>Amount:</label>
                                <input
                                    type='text'
                                    name='amount'
                                    placeholder='Loan amount'
                                    value={userValues.amount}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label id='label'>Interest:</label>
                                <input
                                    type='text'
                                    name='interest'
                                    placeholder='Interest'
                                    value={userValues.interest}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label id='label'>Years:</label>
                                <input
                                    type='text'
                                    name='years'
                                    placeholder='Years to repay'
                                    value={userValues.years}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <input type='submit' className='button' />
                        </div>
                        <div className='form-items'>
                            {/*<h4>*/}
                            {/*    Loan amount: ${userValues.amount} <br /> Interest:{' '}*/}
                            {/*    {userValues.interest}% <br /> Years to repay: {userValues.years}*/}
                            {/*</h4>*/}
                            <div>
                                <label id='label'>Monthly Payment:</label>
                                <input type='text' value={results.monthlyPayment} disabled />
                            </div>
                            <div>
                                <label id='label'>Total Payment: </label>
                                <input type='text' value={results.totalPayment} disabled />
                            </div>
                            <div>
                                <label id='label'>Total Interest:</label>
                                <input type='text' value={results.totalInterest} disabled />
                            </div>

                        </div>

        </div>
    );
}

export default App;

