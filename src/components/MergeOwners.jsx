import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function MergeOwners(){
    const [owner1, setowner1] = useState("")
    const [owner2, setowner2] = useState("")
    const [years, setyears] = useState("")

    let { Espn_League_Id } = useParams();
    const id = Espn_League_Id

    function handleowner1Input(e){
        setowner1(e.target.value)
    }
    function handleowner2Input(e){
        setowner2(e.target.value)
    }
    function handleyearsInput(e){
        setyears(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.put(`http://localhost:8000/wel/${id}/merge`, {
            owner1: owner1,
            owner2: owner2,
            years: years
          })
          .then((res) =>{
            setowner1("")
            setowner2("")
            setyears("")
          })
          .catch((err) =>{})
    }

    return(
        <>
        <h1>Merge Owners</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="">Owner 1</label>
            <input type="text" placeholder="Merge data into" name="owner1" onChange={handleowner1Input} />
            <label htmlFor="">Owner 2</label>
            <input type="text" placeholder="Merge this owners data into owner1" name="owner2"onChange={handleowner2Input}/>
            <label htmlFor="">Years</label>
            <input type="text" placehold= "years" placeholder = "2020,2021" name="years" onChange={handleyearsInput}/>
            <input type="submit" />
        </form>
        </>
    )
}