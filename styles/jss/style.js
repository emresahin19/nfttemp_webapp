const styles = {
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
        marginLeft: "10px",
        marginRight: "10px",
        },
    },
    parallax: {
        height: "90vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
      },
      filter: {
        "&:before": {
          background: "rgba(0, 0, 0, 0.5)",
        },
        "&:after,&:before": {
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
          display: "block",
          left: "0",
          top: "0",
          content: "''",
        },
      },
      small: {
        height: "380px",
      },
      parallaxResponsive: {
          minHeight: "660px",
      },
      openedCards0: {
        transform: 'rotateZ(-30deg)',
        transformOrigin: '10% 90% 0px'
      },
      closedCards0: {
          transform: 'translatex(0)',
          transformOrigin: '10% 90% 0px'
      },

    openedCards1: {
      transform: 'translatex(-228px) rotateZ(-15deg)',
      transformOrigin: '20% 90% 0px'
    },
    closedCards1: {
        transform: 'translatex(0)',
        transformOrigin: '20% 90% 0px'
    },
    
    openedCards2: {
        transform: 'translateX(-456px) translateY(-50px)',
        transformOrigin: '0% 0% 0px'
    },
    closedCards2: {
        transform: 'translatex(0)',
        transformOrigin: '0% 0% 0px'
    },
    
    openedCards3: {
        transform: 'translatex(-684px) rotateZ(15deg)',
        transformOrigin: '80% 90% 0px'
    },
    closedCards3: {
        transform: 'translatex(0)',
        transformOrigin: '80% 90% 0px'
    },
    
    openedCards4: {
        transform: 'translatex(-912px) rotateZ(30deg)',
        transformOrigin: '90% 90% 0px'
    },
    closedCards4: {
        transform: 'translatex(0)',
        transformOrigin: '90% 90% 0px'
    },
}

export default styles;