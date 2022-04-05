import { useMediaQuery } from "react-responsive";

const App = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)"
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });

  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)"
  });

  const isRetina = useMediaQuery({
    query: "(max-resolution: 300dpi)"
  });

  return (
    <Wrapper>
      {
        isDesktop ? <DesktopView /> : <MobileView />
      }
      {isTablet && <Tablet />}
      <p>This is {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {isRetina && <p>You are testig retina</p>}
  
    </Wrapper>
  )
}