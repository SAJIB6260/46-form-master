
import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
// import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateFulForm from './Components/StateFulForm/StateFulForm'

function App() {

  // const handleSignUp = data =>{
  //   console.log('sign up data', data);
  // }

  // const handleUpdateProfile = data =>{
  //   console.log('Profile update data', data)
  // }

  return (
    <>
      <h1>Form Master</h1>


      <GrandPa></GrandPa>



      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
{/*       <ReuseableForm formTitle={"Sign Up"} handleSubmit={handleSignUp}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={"Profile Update"} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Alawys Update your Profile</p>
        </div>
      </ReuseableForm> */}
    </>
  )
}

export default App
