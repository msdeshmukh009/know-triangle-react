import {useState} from 'react';
function ValidTriangle(){
    const [output,setOutput] = useState('');
    const [angleOne,setAngleOne] = useState('');
    const [angleTwo,setAngleTwo] = useState('');
    const [angleThree,setAngleThree] = useState('');
    function clickHandler(e){
        console.log(angleOne,angleTwo,angleThree)
        e.preventDefault();
        if(angleOne !=='' && angleTwo !=='' && angleThree !==''){
            if(Number(angleOne)>0.01 && Number(angleTwo)>0.01 && Number(angleThree)>0.01){
                if(Number(angleOne)+Number(angleTwo)+Number(angleThree)===180){
                    setOutput('Yup! this will work')
                }else{
                    setOutput("This doesn't fill like a triangle")
                }
            }else{
                setOutput('Angle must be greater than 0')
            }    
        }else{
            setOutput('Every input is mandatory')
        }
        
    }
    return(
        <div>
        <nav><h1>Is triangle?</h1></nav>
        <main>
            <form>
                <label htmlFor="AngleOne">∠A:
                <input onChange={(e)=>setAngleOne(e.target.value)} type="number" />
                </label>
                <label htmlFor="AngleTwo">∠B:
                <input onChange={(e)=>setAngleTwo(e.target.value)} type="number" />
                </label>
                <label htmlFor="AngleThree">∠C:
                <input onChange={(e)=>setAngleThree(e.target.value)} type="number" />
                </label>
                <button onClick={clickHandler} type="submit" >check</button>
            </form>
            <div>{output}</div>
        </main>
        </div>

    )
}
export default ValidTriangle;