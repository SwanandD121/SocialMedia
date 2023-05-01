import { useDisclosure } from '@mantine/hooks';
import {  Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        overlayOpacity={0.55}
        overlayBlur={4}
        size='50%'
        opened={modalOpened}
        onClose={()=> setModalOpened(false)}
      >
        <form className='infoForm flex flex-col gap-4 items-center'>

            <h3 className='text-lg font-bold' >Your Info</h3>
            
            <div className='flex gap-2 w-full justify-around'>
                <input type="text" name='FirstName' placeholder='First Name' className='infoInput w-full bg-gray-200 p-2 rounded-lg outline-none'/>
                <input type="text" name='LastName' placeholder='Last Name' className='infoInput w-full bg-gray-200 p-2 rounded-lg outline-none' />
            </div>

            <div className='w-full'>
                <input type="text" name='Gear' placeholder='Gear' className='infoInput w-full bg-gray-200 p-2 rounded-lg outline-none' />
            </div>

            <div className='flex gap-2 w-full'>
                <input type="text" name='Age' placeholder='Age' className='infoInput w-full bg-gray-200 p-2 rounded-lg outline-none' />
                <input type="text" name='Experience' placeholder='Experience' className='infoInput w-full bg-gray-200 p-2 rounded-lg outline-none' />
            </div>

            <div className='w-full'>
                <input type="text" name='Achievements' placeholder='Achievements' className='infoInput w-full bg-gray-200 p-2 rounded-lg outline-none' />
            </div>

            <div className='flex w-full'>
                Profile Image
                <input type="file" name='profileImg'/>

                Cover Image
                <input type="file" name='coverImg'/>
            </div>

            <button type='submit' className='text-white bg-gradient-to-r from-[#2eaafa] to-[#1060d7] p-2 rounded-lg shadow-md border-2 hover:border-[#2eaafa] hover:bg-gradient-to-l hover:from-white hover:to-white hover:text-[#297eff] hover:cursor-pointer'>
                    Update
            </button>


        </form>

      </Modal>
    </>
  );
}

export default ProfileModal