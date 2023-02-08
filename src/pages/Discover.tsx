/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import microphone from "../assets/microphone.svg"
import albums from "../assets/albums.svg"
import more from "../assets/more.svg"
import covers from "../assets/covers-soundwave.jpeg"
import DiscoverNewMusicCard from '../components/DiscoverNewMusicCard'
import { Footer } from "../components/Footer";

type Props = {}

const Discover = (props: Props) => {
  return (
    <>
    <DiscoverNewMusicCard/>
   
    <Footer />
    </> 
  )
}
export default Discover;

