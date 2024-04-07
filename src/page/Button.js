
import LoadingButton from '../components/Buttons/AnimeButton/LoadingButton'
import AllButton from '../components/Buttons/Buttons-tailwind/AllButton'
import StateButton from '../components/Buttons/Buttons-tailwind/StateButtons'
import GhostButton2 from '../components/Buttons/ghost-tailwind/GhostButton2'
import GhostButton3 from '../components/Buttons/ghost-tailwind/GhostButtton3'
import GhostButton from '../components/Buttons/GhostButton/GhostButton'
import LinkButton from '../components/Buttons/LinkButton/LinkButton'
function Button() {
  return (
    <>

    <p className='text-lg'> Button </p>
    <AllButton  label='Buttons'/>
    <GhostButton label={'Button'}/>
    <div className='text-lg'>
     sm to 2xl Buttons </div>
    <AllButton size={'sm'} label='Buttons'/> 
    <AllButton size={'md'} label='Buttons'/> 
    <AllButton size={'lg'} label='Buttons'/> 
    <AllButton size={'xl'} label='Buttons'/>
    <AllButton size={'2xl'} label='Buttons'/>
   <br/>
   <br/>
   <p className='text-lg'> Ghost Button  7 layers</p>
   <GhostButton2 label={'Button'} type={'primary'}/>
   <GhostButton2 label={'Button'} type={'accent'}/>
   <GhostButton2 label={'Button'} type={'success'}/>
   <GhostButton2 label={'Button'} type={'info'}/>
   <GhostButton2 label={'Button'} type={'warning'}/>
   <GhostButton2 label={'Button'} type={'error'}/>
   <GhostButton2 label={'Button'} type={'secondary'}/>
   <GhostButton2 label={'Button'} />
   <br/>
   <br/>
   <p className='text-lg'>  GHOST BUTTON WITH BORDER</p>
   <GhostButton3 label={'Button'} type={'primary'}/>
   <GhostButton3 label={'Button'} type={'accent'}/>
   <GhostButton3 label={'Button'} type={'success'}/>
   <GhostButton3 label={'Button'} type={'info'}/>
   <GhostButton3 label={'Button'} type={'warning'}/>
   <GhostButton3 label={'Button'} type={'error'}/>
   <GhostButton3 label={'Button'} type={'secondary'}/>
   <GhostButton3 label={'Button'} />
   
   <br/>
   <br/>
   <p className='text-lg'> STATE BUTTON WITH FILL COLOR</p>
   <StateButton label={'Button'} type={'primary'}/>
   <StateButton label={'Button'} type={'accent'}/>
   <StateButton label={'Button'} type={'success'}/>
   <StateButton label={'Button'} type={'info'}/>
   <StateButton label={'Button'} type={'warning'}/>
   <StateButton label={'Button'} type={'error'}/>
   <StateButton label={'Button'} type={'secondary'}/>
   <StateButton label={'Button'} />
   <br/>
   <br/>
   Loading of
   <LoadingButton isLoading={''} label={'Your Loading button'}/>
   <br/>
   loading on
   <LoadingButton isLoading={'t'} label={'Your Loading button'}/>
<br/>
<br/>
    </>
  )
}

export default Button