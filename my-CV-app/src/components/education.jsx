import '../styles/style.css';

export default function Education(){
    return(
        <div className="Container">
            <h1>Education Details</h1>
            <form action="GET" className='naming-details'>
                <div className='input-container'>
                    <label htmlFor="School" className='School'>School :</label>
                    <input type="text" />
                </div>
                <div className='input-container'>
                    <label htmlFor="college" className='college'>College :</label>
                    <input type="text" />
                </div>
                <div className='input-container'>
                    <label htmlFor="University" className='University'>University :</label>
                    <input type="text" />
                </div>
                <div className='input-container'>
                    <label htmlFor="CGPA" className='CGPA'>CGPA :</label>
                    <input type="number"/>
                </div>

            </form>
        </div>
    )
}