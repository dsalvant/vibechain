export const initialState = {
zones: {
  header: true,
  sidebar: true,
  footer: true,
  main: true,
},
regions: {
  tabs: false,
  tray: false,
  panelLeft: true,
  panelRight: true,
},
/*--- Header ---*/
header: {
  layout: {
    ml: [0],
    mt: [0],
    p: [0]
  },
  meta: {
    height: [120, 80],
    mb: [20, 40]
  }
},
/*--- Sidebar ---*/
footer: {
  layout: {
  
  },
  meta: {
    mr: 0
  }
},
/*--- Sidebar ---*/
sidebar: {
  layout: {
    mt: [140, 120],
    w: [0, 170, 250]
  },
  meta: {
    mr: 0
  }
},
/*--- Main ---*/
main: {
  layout: {
    bg: 'white',
    mt: [0],
    mb: [0],
    ml: [0]
  },
  regions: {
    /*--- Tabs ---*/
    tabs: {
      layout: {
        p: ['5px 10px', '10px 15px']
      },
      meta: {
        height: [40,80],
        mb: [0, 20]
      }
    },
    /*--- Tray ---*/
    tray: {
      layout: {
        mt: [40, 100],
        mb:[20, 40],
        w: [0, 120, 180]
      },
      meta: {
        mr: [0, 40, 40]
      }
    },
    /*--- Content ---*/
    content: {
      layout: {
        mt: [0],
        mb: [0],
        ml: [0],
        mr: [220],
        p: [20],
        w: ['calc(100%)'],
      },
      areas: {
        left: {
          enabled: true,
          layout: {
            flex: ["2 1 25%"],
            p: [10, 25]
          }
        },
        center: {
          enabled: true,
          layout: {
            flex: ["4 1 55%"],
            p: [30]
          }
        },
        right: {
          enabled: true,
          layout: {
            flex: ["1 1 20%"],
            p: [10, 25]
          }
        }
      }
    },
  }
}
}


export const getDelta =  (state, delta) => state[delta]  || {}

/**
 * @function getZones
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZones = (state) => {
return state.theme
}

/**
 * @function getZones
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZonesDashboard = (state) => {
return state.theme.dashboard
}

/**
 * @function getZone
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZone = (state, zone) => {
return state.theme[zone]
}


/**
 * @function getZoneLayout
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneLayout = (state, zone) => {
return state.theme[zone].layout
}

/**
 * @function getZoneRegions
 * 
 * @param {Object} state
 * @param {String} zone
 */
export const getZoneRegions = (state, zone) => {
return state.theme[zone].regions
}
