import React, { useState, useContext, useEffect } from 'react'
import { SettingsContext } from '../../context';
import { Card, Button } from 'react-bootstrap';
import "./list.css"
import Auth from '../context/auth';

export default function List(props) {

  const settingsContext = useContext(SettingsContext);
  console.log(settingsContext)
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(Math.ceil(props.list.length / settingsContext.perPage));

  useEffect(() => {
    let start = (currentPage - 1) * settingsContext.perPage;
    let end = start + settingsContext.perPage;
    setNumOfPages(Math.ceil(props.list.length / settingsContext.perPage));
    setCurrentItems(props.list.slice(start, end));
  }, [props.list.length]);

  useEffect(() => {
    if (settingsContext.showCompleted) {
      let start = (currentPage - 1) * settingsContext.perPage;
      let end = start + settingsContext.perPage;
      setCurrentItems(props.list.slice(start, end));
      setNumOfPages(Math.ceil(props.list.length / settingsContext.perPage));
    } else {
      let temp = props.list.filter((item) => {
        return item.complete === false
      })
      let start = (currentPage - 1) * settingsContext.perPage;
      let end = start + settingsContext.perPage;
      setCurrentItems(temp.slice(start, end));
      setNumOfPages(Math.ceil(temp.length / settingsContext.perPage))
    }
  }, [currentPage, settingsContext.showCompleted]);

  function changeCurrentPage(num) {
    setCurrentPage(num);
  }

  function completed() {
    settingsContext.setshowCompleted(!settingsContext.showCompleted);
  }

  const navigate = () => {
    let page = [];
    for (let i = 1; i <= numOfPages; i++) {
      page.push(<button onClick={() => { changeCurrentPage(i) }} key={i}>{i}</button>)
    }
    return page;
  }

  return (
    <div className="MyList">

      {
        settingsContext.showCompleted &&
        <Button onClick={completed} > Hide Completed </Button>
      }

      {
        !settingsContext.showCompleted &&
        <Button onClick={completed} > View Completed </Button>
      }


      {currentItems.map(item => (

        <Card key={item.id}>

          <Card.Body>
            <Card.Title> {item.text}
              <Auth capability="delete">
                <Button className="closeButton" variant="secondary" onClick={() => props.deleteFunction(item.id)}> X </Button>
              </Auth>
            </Card.Title>
            <Card.Text>
              Assigned to: {item.assignee}
            </Card.Text>
            <Card.Text>
              Difficulty: {item.difficulty}
            </Card.Text>
            <Auth capability="update">
              <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
            </Auth>
          </Card.Body>
        </Card>



      ))}
      {currentPage > 1 && <Button className="Previous" onClick={() => { setCurrentPage(currentPage - 1) }}>Previous</Button>}
      {navigate()}
      {currentPage < numOfPages && <Button className="Next" onClick={() => { setCurrentPage(currentPage + 1) }} >Next</Button>}
    </div>
  )
}