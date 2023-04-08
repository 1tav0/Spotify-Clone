import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className='footer__albumLogo'
          src="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/75/90/ba/7590baad-4f50-1ee6-1ae4-6f3c999f549e/717340470607_cover.jpg/40x40bb.webp"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Belico EL Asunto </h4>
          <p>codiciado</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='play__button' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
        
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer