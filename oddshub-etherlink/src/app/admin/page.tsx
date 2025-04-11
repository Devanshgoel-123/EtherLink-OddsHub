"use client";
import { Box } from "@mui/material";
import "./styles.scss";
import { useEffect, useState } from "react";
import "rsuite/dist/rsuite-no-reset.min.css";
import Select from "react-select";
import { DatePicker } from "rsuite";
import { colorStyles } from "@/components/helpers/menuStyles";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import useCreateMarket from "@/components/hooks/useCreateMarket";
import SettleMarkets from "@/components/SettleMarkets";
import { useAccount } from "wagmi";
import useCreateCryptoMarket from "@/components/hooks/useCreateCryptoMarket";
import useCreateSportsMarket from "@/components/hooks/useCreateSportsMarket";
import WalletConnectButton from "@/components/Header/WalletButtons";

const categories = [
  {
    value: "Crypto Market",
    label: "Crypto",
  },
  {
    value: "Global Politics",
    label: "Politics",
  },
  {
    value: "Pop Culture",
    label: "Pop Culture",
  },
  {
    value: "Sports",
    label: "Sports",
  },
  {
    value: "Armored MMA",
    label: "AMMA",
  },
];

export default function AdminPortal() {
  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [outcome1, setOutcome1] = useState("");
  const [outcome2, setOutcome2] = useState("");
  const [deadline, setDeadline] = useState(Number(new Date().getTime)/1000);
  const [image, setImage] = useState("");
  const [fightImage, setFightImage] = useState("");
  const [canCreate, setCanCreate] = useState(false);

  const {address}=useAccount();

  useEffect(()=>{
    if(address===undefined){
      setCanCreate(false)
    }else{
      setCanCreate(true)
    }
  },[address])
  const [action, setAction] = useState(0);

// const firebaseConfig = {
//   apiKey: "AIzaSyBBOnIaqM2JbY2Ddjnx4cCHOn-unlhwUCM",
//   authDomain: "baseforesight.firebaseapp.com",
//   projectId: "baseforesight",
//   storageBucket: "baseforesight.appspot.com",
//   messagingSenderId: "208805678834",
//   appId: "1:208805678834:web:ebd18499dd40958c640a6b"
// };

  // const app = initializeApp(firebaseConfig);
  
  const { createMarket } = useCreateMarket({
    heading,
    category,
    description,
    outcome1,
    outcome2,
    deadline,
    image,
    fightImage,
  });

  const { createSportsMarket}=useCreateSportsMarket({
    heading,
    category,
    description,
    outcome1,
    outcome2,
    deadline,
    image,
    fightImage,
  })

  const {createCryptoMarket}=useCreateCryptoMarket({
    heading,
    category,
    description,
    outcome1,
    outcome2,
    deadline,
    image,
    fightImage,
  })
  useEffect(() => {
    const validateMarket = () => {
      if (
        heading == "" ||
        description == "" ||
        outcome1 == "" ||
        outcome2 == "" ||
        image == "" ||
        category == "" ||
        fightImage == ""
      ) {
        setCanCreate(false);
        return;
      }

      setCanCreate(true);
      return;
    };
    validateMarket();
  }, [
    category,
    description,
    heading,
    image,
    outcome1,
    outcome2,
    fightImage,
  ]);

  // const handleImageUpload = (e: any, icon: boolean) => {
  //   const storage = getStorage();
  //   const file = e.target.files[0];
  //   const storageRef = ref(storage, `market_icons/${file.name}`);
  //   uploadBytes(storageRef, file).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((downloadURL) => {
  //       if (icon) {
  //         setImage(downloadURL);
  //         return;
  //       }
  //       setFightImage(downloadURL);
  //     });
  //   });
  // };

  return (
    <main className='Admin'>
      <div className='Heading-Section'>
        <div>Market Dashboard</div>
      </div>
      <div className='Action-Choice'>
        <button className='Action-Button' onClick={() => setAction(1)}>
          Create Market
        </button>
        <button className='Action-Button' onClick={() => setAction(0)}>
          Settle Market
        </button>
        <button className='Action-Button' onClick={() => setAction(2)}>
         Toggle Market
        </button>
      </div>
      {action == 1 && (
        <>
          <div className='Content-Section'>
            <Box className='InputContainer'>
              <span className='Label'>Heading</span>
              <Box className='Input'>
                <input
                  className='InputField'
                  type='string'
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  placeholder='Trump vs Biden'
                  required
                />
              </Box>
            </Box>
            <Box className='InputContainer'>
              <span className='Label'>Description</span>
              <Box className='Input'>
                <input
                  className='InputField'
                  type='string'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Will Trump win the 2024 election?'
                  required
                />
              </Box>
            </Box>
            <Box className='InputContainer Outcome'>
              <Box className='InputContainer'>
                <span className='Label'>Outcome 1</span>
                <Box className='Input'>
                  <input
                    className='InputField'
                    type='string'
                    id='numberInput'
                    name='numberInput'
                    value={outcome1}
                    onChange={(e) => setOutcome1(e.target.value)}
                    placeholder='Yes!'
                    required
                  />
                </Box>
              </Box>
              <Box className='InputContainer'>
                <span className='Label'>Outcome 2</span>
                <Box className='Input'>
                  <input
                    className='InputField'
                    type='string'
                    id='numberInput'
                    name='numberInput'
                    value={outcome2}
                    onChange={(e) => setOutcome2(e.target.value)}
                    placeholder='No'
                    required
                  />
                </Box>
              </Box>
            </Box>
            <Box className='InputContainer Outcome'>
              <Box className='InputContainer'>
                <span className='Label'>Category</span>
                <Box className='Input'>
                  <Select
                    className='SelectBox'
                    styles={colorStyles}
                    options={categories}
                    onChange={(category) => setCategory(category?.value!)}
                  />
                </Box>
              </Box>
              <Box className='InputContainer'>
                <span className='Label'>Deadline</span>
                <Box className='Input'>
                  <DatePicker
                    placeholder='Select Deadline'
                    format='MM/dd/yyyy HH:mm'
                    onChange={(value) => setDeadline(value?.getTime() as number)}
                    value={new Date(deadline)}
                  />
                </Box>
              </Box>
            </Box>
            <Box className='InputContainer'>
              <span className='Label'>Image</span>
              <Box className='Input'>
                  <input
                    className='InputField'
                    type='text'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
              </Box>
            </Box>
            <Box className='InputContainer'>
              <span className='Label'>Fight Image</span>
              <Box className='Input'>
                {fightImage == "" ? (
                  <input
                    className='InputField'
                    type='text'
                    value={fightImage}
                    onChange={(e) => setFightImage(e.target.value)}
                    required
                  />
                ) : (
                  <input
                    className='InputField'
                    type='string'
                    id='numberInput'
                    name='numberInput'
                    value={fightImage}
                    disabled
                  />
                )}
              </Box>
            </Box>

            <Box className='Submit'>
              {address!==undefined ? <button
                disabled={!canCreate}
                onClick={()=>{
                  if(canCreate){
                    if(category.toLowerCase().includes("sports") || category.toLowerCase().includes("amma")){
                      createSportsMarket()
                    }else if(category.toLowerCase().includes("crypto")){
                      createCryptoMarket()
                    }else{
                      createMarket()
                    }
                  }             
                }}
                className={`SubmitButton`}
              >
                {address !== undefined? "Create Market" : "Connect Wallet"} 
              </button>
              :
              <WalletConnectButton />
              }
            </Box>
          </div>
        </>
      )}
      {action == 0 && (
        <>
          <div className='Heading-Section'>
            <div>Settle Markets</div>
          </div>
          <div className='Content-Section'>
            <SettleMarkets />
          </div>
        </>
      )}
    </main>
  );
}
