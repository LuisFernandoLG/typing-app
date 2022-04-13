import styled, { keyframes } from 'styled-components'

const speed = '1s'

export const FingerLoader = () => {
  return (
    <StyledFingerLoader>
      <div id='loader'>
        <div className='loading'>
          <div className='finger finger-1'>
            <div className='finger-item'>
              <span></span>
              <i></i>
            </div>
          </div>
          <div className='finger finger-2'>
            <div className='finger-item'>
              <span></span>
              <i></i>
            </div>
          </div>
          <div className='finger finger-3'>
            <div className='finger-item'>
              <span></span>
              <i></i>
            </div>
          </div>
          <div className='finger finger-4'>
            <div className='finger-item'>
              <span></span>
              <i></i>
            </div>
          </div>
          <div className='last-finger'>
            <div className='last-finger-item'>
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </StyledFingerLoader>
  )
}

const finger1Animation = keyframes`
  0% {
      padding: 12px 0 5px 0;
    }
    20% {
      padding: 12px 0 5px 0;
    }
    29% {
      padding: 4px 0 24px 0;
    }
    35% {
      padding: 4px 0 24px 0;
    }
    41% {
      padding: 12px 0 5px 0;
    }
    100% {
      padding: 12px 0 5px 0;
    }
  `

const finger1AnimationSpan = keyframes`
    0% {
      top: 0;
    }
    20% {
      top: 0;
    }
    29% {
      top: -7px;
    }
    35% {
      top: -7px;
    }
    41% {
      top: 0;
    }
    100% {
      top: 0;
    }
  `

const finger1Animationi = keyframes`
    0% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    20% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    29% {
      bottom: 8px;
      height: 12px;
      -webkit-border-radius: 7px 7px 4px 4px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 7px 7px 4px 4px;
      -moz-background-clip: padding;
      border-radius: 7px 7px 4px 4px;
      background-clip: padding-box;
    }
    35% {
      bottom: 8px;
      height: 12px;
      -webkit-border-radius: 7px 7px 4px 4px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 7px 7px 4px 4px;
      -moz-background-clip: padding;
      border-radius: 7px 7px 4px 4px;
      background-clip: padding-box;
    }
    41% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    100% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }`

const finger2Animation = keyframes`
    0% {
      padding: 6px 0 2px 0;
    }
    24% {
      padding: 6px 0 2px 0;
    }
    33% {
      padding: 2px 0 16px 0;
    }
    39% {
      padding: 2px 0 16px 0;
    }
    45% {
      padding: 6px 0 2px 0;
    }
    100% {
      padding: 6px 0 2px 0;
    }`

const finger2AnimationSpan = keyframes`
    0% {
      top: 0;
    }
    24% {
      top: 0;
    }
    33% {
      top: -7px;
    }
    39% {
      top: -7px;
    }
    45% {
      top: 0;
    }
    100% {
      top: 0;
    }`

const finger2Animationi = keyframes`
    0% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    24% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    33% {
      bottom: 8px;
      height: 12px;
      -webkit-border-radius: 7px 7px 4px 4px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 7px 7px 4px 4px;
      -moz-background-clip: padding;
      border-radius: 7px 7px 4px 4px;
      background-clip: padding-box;
    }
    39% {
      bottom: 8px;
      height: 12px;
      -webkit-border-radius: 7px 7px 4px 4px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 7px 7px 4px 4px;
      -moz-background-clip: padding;
      border-radius: 7px 7px 4px 4px;
      background-clip: padding-box;
    }
    45% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    100% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }`

const finger3Animation = keyframes`
    0% {
      padding: 0 0 0 0;
    }
    28% {
      padding: 0 0 0 0;
    }
    37% {
      padding: 0 0 12px 0;
    }
    43% {
      padding: 0 0 12px 0;
    }
    49% {
      padding: 0 0 0 0;
    }
    100% {
      padding: 0 0 0 0;
    }`

const finger3AnimationSpan = keyframes`
    0% {
      top: 0;
    }
    28% {
      top: 0;
    }
    37% {
      top: -7px;
    }
    43% {
      top: -7px;
    }
    49% {
      top: 0;
    }
    100% {
      top: 0;
    }`

const finger3Animationi = keyframes`
    0% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    28% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    37% {
      bottom: 8px;
      height: 12px;
      -webkit-border-radius: 7px 7px 4px 4px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 7px 7px 4px 4px;
      -moz-background-clip: padding;
      border-radius: 7px 7px 4px 4px;
      background-clip: padding-box;
    }
    43% {
      bottom: 8px;
      height: 12px;
      -webkit-border-radius: 7px 7px 4px 4px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 7px 7px 4px 4px;
      -moz-background-clip: padding;
      border-radius: 7px 7px 4px 4px;
      background-clip: padding-box;
    }
    49% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    100% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }`
const finger4Animation = keyframes`
    0% {
      padding: 8px 0 3px 0;
    }
    32% {
      padding: 8px 0 3px 0;
    }
    41% {
      padding: 4px 0 20px 0;
    }
    47% {
      padding: 4px 0 20px 0;
    }
    53% {
      padding: 8px 0 3px 0;
    }
    100% {
      padding: 8px 0 3px 0;
    }`

const finger4AnimationSpan = keyframes`
    0% {
      top: 0;
    }
    32% {
      top: 0;
    }
    41% {
      top: -7px;
    }
    47% {
      top: -7px;
    }
    53% {
      top: 0;
    }
    100% {
      top: 0;
    }`

const finger4Animationi = keyframes`
    0% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    32% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    41% {
      bottom: 8px;
      height: 12px;
      -webkit-border-radius: 7px 7px 4px 4px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 7px 7px 4px 4px;
      -moz-background-clip: padding;
      border-radius: 7px 7px 4px 4px;
      background-clip: padding-box;
    }
    47% {
      bottom: 8px;
      height: 12px;
      -webkit-border-radius: 7px 7px 4px 4px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 7px 7px 4px 4px;
      -moz-background-clip: padding;
      border-radius: 7px 7px 4px 4px;
      background-clip: padding-box;
    }
    53% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }
    100% {
      bottom: 3px;
      height: 14px;
      -webkit-border-radius: 10px 10px 7px 7px;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 10px 10px 7px 7px;
      -moz-background-clip: padding;
      border-radius: 10px 10px 7px 7px;
      background-clip: padding-box;
    }`

const finger5Animation = keyframes`
    0% {
      top: 32px;
      right: 0;
      -webkit-border-radius: 0 5px 14px 0;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 0 5px 14px 0;
      -moz-background-clip: padding;
      border-radius: 0 5px 14px 0;
      background-clip: padding-box;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    34% {
      top: 32px;
      right: 0;
      -webkit-border-radius: 0 5px 14px 0;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 0 5px 14px 0;
      -moz-background-clip: padding;
      border-radius: 0 5px 14px 0;
      background-clip: padding-box;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    43% {
      top: 20px;
      right: 2px;
      -webkit-border-radius: 0 8px 20px 0;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 0 8px 20px 0;
      -moz-background-clip: padding;
      border-radius: 0 8px 20px 0;
      background-clip: padding-box;
      -webkit-transform: rotate(-12deg);
      -ms-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }
    50% {
      top: 20px;
      right: 2px;
      -webkit-border-radius: 0 8px 20px 0;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 0 8px 20px 0;
      -moz-background-clip: padding;
      border-radius: 0 8px 20px 0;
      background-clip: padding-box;
      -webkit-transform: rotate(-12deg);
      -ms-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }
    60% {
      top: 32px;
      right: 0;
      -webkit-border-radius: 0 5px 14px 0;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 0 5px 14px 0;
      -moz-background-clip: padding;
      border-radius: 0 5px 14px 0;
      background-clip: padding-box;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      top: 32px;
      right: 0;
      -webkit-border-radius: 0 5px 14px 0;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 0 5px 14px 0;
      -moz-background-clip: padding;
      border-radius: 0 5px 14px 0;
      background-clip: padding-box;
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }`

const StyledFingerLoader = styled.div`
/* border:1px solid red; */
  /* #loader {
    background-color: ${({ theme: { accentColor } }) => accentColor};
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 3000;
  } */
  .loading {
    /* position: absolute; */
    /* left: 50%; */
    /* top: 50%; */
    margin: -35px 0 0 -56px;
    width: 112px;
    height: 70px;
    *zoom: 1;
  }
  .loading:before,
  .loading:after {
    display: table;
    content: '';
  }
  .loading:after {
    clear: both;
  }
  .loading .finger {
    float: left;
    margin: 0 2px 0 0;
    width: 20px;
    height: 100%;
  }

  .loading .finger-1 {
    -webkit-animation: ${finger1Animation} ${speed} infinite ease-out;
    animation: ${finger1Animation} ${speed} infinite ease-out;
  }
  .loading .finger-1 span {
    -webkit-animation: ${finger1AnimationSpan} ${speed} infinite ease-out;
    animation: ${finger1AnimationSpan} ${speed} infinite ease-out;
  }
  .loading .finger-1 i {
    -webkit-animation: ${finger1Animationi} ${speed} infinite ease-out;
    animation: ${finger1Animationi} ${speed} infinite ease-out;
  }
  .loading .finger-2 {
    -webkit-animation: finger-2-animation ${speed} infinite ease-out;
    animation: ${finger2Animation} ${speed} infinite ease-out;
  }
  .loading .finger-2 span {
    -webkit-animation: ${finger2AnimationSpan} ${speed} infinite ease-out;
    animation: ${finger2AnimationSpan} ${speed} infinite ease-out;
  }
  .loading .finger-2 i {
    -webkit-animation: ${finger2Animationi} ${speed} infinite ease-out;
    animation: ${finger2Animationi} ${speed} infinite ease-out;
  }
  .loading .finger-3 {
    -webkit-animation: ${finger3Animation} ${speed} infinite ease-out;
    animation: ${finger3Animation} ${speed} infinite ease-out;
  }
  .loading .finger-3 span {
    -webkit-animation: ${finger3AnimationSpan} ${speed} infinite ease-out;
    animation: ${finger3AnimationSpan} ${speed} infinite ease-out;
  }
  .loading .finger-3 i {
    -webkit-animation: ${finger3Animationi} ${speed} infinite ease-out;
    animation: ${finger3Animationi} ${speed} infinite ease-out;
  }
  .loading .finger-4 {
    -webkit-animation: ${finger4Animation} ${speed} infinite ease-out;
    animation: ${finger4Animation} ${speed} infinite ease-out;
  }
  .loading .finger-4 span {
    -webkit-animation: ${finger4AnimationSpan} ${speed} infinite ease-out;
    animation: ${finger4AnimationSpan} ${speed} infinite ease-out;
  }
  .loading .finger-4 i {
    -webkit-animation: ${finger4Animationi} ${speed} infinite ease-out;
    animation: ${finger4Animationi} ${speed} infinite ease-out;
  }
  .loading .finger-item {
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-border-radius: 6px 6px 8px 8px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 6px 6px 8px 8px;
    -moz-background-clip: padding;
    border-radius: 6px 6px 8px 8px;
    background-clip: padding-box;
    background-color: ${({ theme: { primaryColor } }) => primaryColor};
  }
  .loading .finger-item span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    padding: 5px 5px 0 5px;
  }
  .loading .finger-item span:before,
  .loading .finger-item span:after {
    content: '';
    position: relative;
    display: block;
    margin: 0 0 2px 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme: { accentColor } }) => accentColor};
  }
  .loading .finger-item i {
    position: absolute;
    left: 3px;
    bottom: 3px;
    width: 14px;
    height: 14px;
    -webkit-border-radius: 10px 10px 7px 7px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 10px 10px 7px 7px;
    -moz-background-clip: padding;
    border-radius: 10px 10px 7px 7px;
    background-clip: padding-box;
    background-color: ${({ theme: { accentColor } }) => accentColor};
  }
  .loading .last-finger {
    position: relative;
    float: left;
    width: 24px;
    height: 100%;
    overflow: hidden;
  }
  .loading .last-finger-item {
    position: absolute;
    right: 0;
    top: 32px;
    width: 110%;
    height: 20px;
    -webkit-border-radius: 0 5px 14px 0;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 0 5px 14px 0;
    -moz-background-clip: padding;
    border-radius: 0 5px 14px 0;
    background-clip: padding-box;
    background-color: ${({ theme: { primaryColor } }) => primaryColor};
    -webkit-animation: ${finger5Animation} ${speed} infinite linear;
    animation: ${finger5Animation} ${speed} infinite linear;
  }
  .loading .last-finger-item i {
    position: absolute;
    left: 0;
    top: -8px;
    width: 22px;
    height: 8px;
    background-color: ${({ theme: { primaryColor } }) => primaryColor};
    overflow: hidden;
  }
  .loading .last-finger-item i:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 34px;
    height: 20px;
    -webkit-border-radius: 0 0 15px 15px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 0 0 15px 15px;
    -moz-background-clip: padding;
    border-radius: 0 0 15px 15px;
    background-clip: padding-box;
    background-color: ${({ theme: { accentColor } }) => accentColor};
  }
`
