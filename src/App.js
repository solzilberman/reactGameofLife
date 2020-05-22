import React, { useState, useRef, useCallback } from 'react';
import produce from "immer";
import './App.css';
import { Button, Card, Paper, Tabs, Tab, makeStyles, Box, Modal } from '@material-ui/core'
import Block from './assets/block.svg'
import Beehive from './assets/beehive.svg'
import Flower from './assets/flower.svg'



function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 'fit-content'
  },

});

const hello = "hello"

const numRows = 25;
const numCols = 25;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};

function App() {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });
  const [running, setRunning] = useState(false);
  const [value, setValue] = React.useState(0);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const runningRef = useRef(running);
  runningRef.current = running;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <Paper style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%)`, }}>
      <div style={{ width: '80%', margin: '20px' }}>
        <h2 id="simple-modal-title">This is a no player game (NPC). The rules are as follows:</h2>
      </div>
      <div style={{ width: '80%', margin: '20px' }}>
        <p id="simple-modal-description">
          <ol>
            1. Any live cell with two or three live neighbours survives.
        </ol>
          <ol>
            2. Any dead cell with three live neighbours becomes a live cell.
        </ol>
          <ol>
            3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
        </ol>

        </p>
      </div>

    </Paper >
  );

  const stillLife = (type) => {
    if (type == 'block')
      setGrid(g => {
        return produce(g, gridCopy => {
          gridCopy[10][10] = 1
          gridCopy[11][10] = 1
          gridCopy[10][9] = 1
          gridCopy[11][9] = 1
        });
      });
    if (type == 'beehive')
      setGrid(g => {
        return produce(g, gridCopy => {
          gridCopy[10][10] = 1
          gridCopy[10][11] = 1
          gridCopy[8][10] = 1
          gridCopy[8][11] = 1
          gridCopy[9][9] = 1
          gridCopy[9][12] = 1
        });
      });
    if (type == 'flower')
      setGrid(g => {
        return produce(g, gridCopy => {
          gridCopy[10][10] = 1
          gridCopy[10][8] = 1
          gridCopy[9][9] = 1
          gridCopy[11][9] = 1
        });
      });
    if (type == 'toad')
      setGrid(g => {
        return produce(g, gridCopy => {
          gridCopy[10][10] = 1
          gridCopy[10][11] = 1
          gridCopy[10][12] = 1
          gridCopy[9][11] = 1
          gridCopy[9][12] = 1
          gridCopy[9][13] = 1

        });
      });
    if (type == 'blinker')
      setGrid(g => {
        return produce(g, gridCopy => {
          gridCopy[10][10] = 1
          gridCopy[10][11] = 1
          gridCopy[10][12] = 1

        });
      });
    if (type == 'glider')
      setGrid(g => {
        return produce(g, gridCopy => {
          gridCopy[5][5] = 1
          gridCopy[6][6] = 1
          gridCopy[7][6] = 1
          gridCopy[7][5] = 1
          gridCopy[7][4] = 1

        });
      });
    if (type == 'voyager')
      setGrid(g => {
        return produce(g, gridCopy => {
          gridCopy[5][5] = 1
          gridCopy[6][4] = 1
          gridCopy[8][4] = 1
          gridCopy[5][6] = 1
          gridCopy[5][7] = 1
          gridCopy[5][8] = 1
          gridCopy[6][8] = 1
          gridCopy[7][8] = 1
          gridCopy[8][7] = 1

        });
      });
    if (type == 'vimana')
      setGrid(g => {
        return produce(g, gridCopy => {
          gridCopy[10][10] = 1
          gridCopy[10][9] = 1
          gridCopy[10][11] = 1

          gridCopy[11][9] = 1
          gridCopy[11][11] = 1

          gridCopy[12][10] = 1
          gridCopy[12][9] = 1
          gridCopy[12][11] = 1

          gridCopy[13][10] = 1
          gridCopy[13][9] = 1
          gridCopy[13][11] = 1

          gridCopy[14][10] = 1
          gridCopy[14][9] = 1
          gridCopy[14][11] = 1

          gridCopy[15][10] = 1
          gridCopy[15][9] = 1
          gridCopy[15][11] = 1

          gridCopy[16][9] = 1
          gridCopy[16][11] = 1

          gridCopy[17][10] = 1
          gridCopy[17][9] = 1
          gridCopy[17][11] = 1


        });
      });
  }

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div style={{ width: '100%', display: 'flex' }}>

      <div>
        <div style={{ textAlign: 'center', border: '2px solid grey', margin: '20px', marginTop: '10px' }}>
          <h3>Conway's Game of Life</h3>
        </div>
        <div style={{ margin: '15px', display: 'flex', width: '300px', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Button
            onClick={() => {
              setRunning(!running);
              if (!running) {
                runningRef.current = true;
                runSimulation();
              }
            }}
            variant="contained"
            color={running ? "secondary" : "primary"}
          >
            {running ? "stop" : "start"}
          </Button>
          <Button
            onClick={() => {
              const rows = [];
              for (let i = 0; i < numRows; i++) {
                rows.push(
                  Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
                );
              }

              setGrid(rows);
            }}
            variant="contained"
            color="primary"
          >
            random
      </Button>
          <Button
            onClick={() => {
              setGrid(generateEmptyGrid());
            }}
            variant="contained"
            color="primary"
          >

            clear
      </Button>
        </div>

        <Card style={{ width: '300px', display: 'flex', justifyContent: 'center', marginLeft: '20px' }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${numCols}, 12px)`
            }}
          >
            {grid.map((rows, i) =>
              rows.map((col, k) => (
                <div
                  key={`${i}-${k}`}
                  onClick={() => {
                    const newGrid = produce(grid, gridCopy => {
                      gridCopy[i][k] = grid[i][k] ? 0 : 1;
                    });
                    setGrid(newGrid);
                  }}
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: grid[i][k] ? "pink" : undefined,
                    border: "solid 1px black"
                  }}
                />
              ))
            )}
          </div>
        </Card>
        <div style={{ margin: '15px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
          <Button color="default" variant="contained" onClick={handleOpen}>
            Rules of the Game
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>

      </div>

      <div style={{ display: 'flex', width: '60%', justifyContent: 'center' }}>
        <div style={{ width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '50px', marginTop: '20px' }}>

          <Paper className={classes.root}>
            <Box style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'rgba(10,10,10,1)' }}>Still Lifes</h3>
            </Box>
            <Button style={{ width: '200px', marginBottom: '10px' }} onClick={() => stillLife('block')} variant="outlined" color="primary">

              <h4 style={{ marginRight: '20px' }}>Block</h4>
              <img alt="Game of life block with border.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/66px-Game_of_life_block_with_border.svg.png" decoding="async" width="66" height="66" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/99px-Game_of_life_block_with_border.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/132px-Game_of_life_block_with_border.svg.png 2x" data-file-width="66" data-file-height="66" />

            </Button>
            <Button style={{ width: '200px', marginBottom: '10px' }} onClick={() => stillLife('beehive')} variant="outlined" color="primary">

              <h4 style={{ marginRight: '20px' }}>Beehive</h4>
              <img alt="Game of life beehive.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/98px-Game_of_life_beehive.svg.png" decoding="async" width="98" height="82" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/147px-Game_of_life_beehive.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/196px-Game_of_life_beehive.svg.png 2x" data-file-width="98" data-file-height="82" />

            </Button>
            <Button style={{ width: '200px', marginBottom: '10px' }} onClick={() => stillLife('flower')} variant="outlined" color="primary">

              <h4 style={{ marginRight: '20px' }}>Flower</h4>
              <img alt="Game of life flower.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/82px-Game_of_life_flower.svg.png" decoding="async" width="82" height="82" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/123px-Game_of_life_flower.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/164px-Game_of_life_flower.svg.png 2x" data-file-width="82" data-file-height="82" />

            </Button>
          </Paper>
        </div>

        <div style={{ position: 'fixed', width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <h2 style={{ border: '2px solid grey', backgroundColor: '#4444', width: '30%' }}>Select a player...</h2>
        </div>
        <div style={{ width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '50px', marginTop: '60px' }}>

          <Paper className={classes.root}>
            <Box style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'rgba(10,10,10,1)' }}>Oscillators</h3>
            </Box>
            <Button style={{ width: '200px', marginBottom: '10px' }} onClick={() => stillLife('toad')} variant="outlined" color="primary">

              <h4 style={{ marginRight: '20px' }}>Toad</h4>
              <img alt="Game of life toad.gif" src="//upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif" decoding="async" width="98" height="98" data-file-width="98" data-file-height="98" />

            </Button>
            <Button style={{ width: '200px', marginBottom: '10px' }} onClick={() => stillLife('beehive')} variant="outlined" color="primary">

              <h4 style={{ marginRight: '20px' }}>Beehive</h4>
              <img alt="Game of life beacon.gif" src="//upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif" decoding="async" width="98" height="98" data-file-width="98" data-file-height="98" />

            </Button>
            <Button style={{ width: '200px', marginBottom: '10px' }} onClick={() => stillLife('blinker')} variant="outlined" color="primary">

              <h4 style={{ marginRight: '20px' }}>Blinker</h4>
              <img alt="Game of life blinker.gif" src="//upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif" decoding="async" width="82" height="82" data-file-width="82" data-file-height="82" />

            </Button>
          </Paper>
        </div>

        <div style={{ width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '50px', marginTop: '20px', marginTop: '70px' }}>

          <Paper className={classes.root}>
            <Box style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'rgba(10,10,10,1)' }}>Spaceships</h3>
            </Box>
            <Button style={{ width: '200px', marginBottom: '10px' }} onClick={() => stillLife('glider')} variant="outlined" color="primary">

              <h4 style={{ marginRight: '20px' }}>Glider</h4>
              <img alt="Game of life animated glider.gif" src="//upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif" decoding="async" width="84" height="84" data-file-width="84" data-file-height="84" />

            </Button>
            <Button style={{ width: '200px', marginBottom: '10px' }} onClick={() => stillLife('voyager')} variant="outlined" color="primary">

              <h4 style={{ marginRight: '20px' }}>Voyager</h4>
              <img alt="Game of life animated LWSS.gif" src="//upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif" decoding="async" width="115" height="84" data-file-width="115" data-file-height="84" />

            </Button>
            <Button style={{ width: '200px', marginBottom: '10px' }} onClick={() => stillLife('vimana')} variant="outlined" color="primary">

              <h4 style={{ marginRight: '20px' }}>Vimana</h4>
              <img alt="I-Column.gif" src="//upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif" decoding="async" width="89" height="145" data-file-width="89" data-file-height="145" />

            </Button>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default App;
