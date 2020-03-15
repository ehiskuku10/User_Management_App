import React from "react"

const EditUserForm = (props) => {
  const { submit, id, text } = props
  return (
    <div style={{margin: "2rem .8rem", width: "30rem"}}>
      <form id={id || null} onSubmit={submit}>
        <input type="text" name="firstname" placeholder="firstname"/>
        <input type="text" name="lastname" placeholder="lastname"/>
        <input type="date" name="dob" placeholder="Date of birth" />
        <input type="text" name="phone" placeholder="phone" />
        <textarea name="address" rows="4" cols="30" placeholder="address"></textarea>
        <input id="submit" type="submit" value={text}/>
      </form>
    </div>
  )
}

export default EditUserForm