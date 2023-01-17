import AngleDownIcon from '@rsuite/icons/legacy/AngleDown';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import AngleUpIcon from '@rsuite/icons/legacy/AngleUp';
import CogIcon from '@rsuite/icons/legacy/Cog';
import HomeIcon from '@rsuite/icons/legacy/Home';
import React from 'react';
import { Affix, Button, ButtonToolbar, Drawer, IconButton, Loader, Nav, Navbar, Placeholder, Radio, RadioGroup } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './App.css';

const styles = {
	radioGroupLabel: {
	  padding: '8px 12px',
	  display: 'inline-block',
	  verticalAlign: 'middle'
	}
  };

function App() {
	const [size, setSize] = React.useState('xs');
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();
  
	const handleOpen = key => {
	  setOpen(true);
	  setPlacement(key);
	};
  return (
    <div className="App">
		<Affix>
		<Navbar>
    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Menu title="Contact">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
    </Nav>
  </Navbar>
		</Affix>
		<div class="container">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos, perferendis optio voluptatum nemo repudiandae minus corporis modi quos voluptates vel nulla quas quisquam provident delectus nihil perspiciatis facilis et!</p>
		</div>

		<ButtonToolbar>
			<Button appearance="default">Default</Button>
			<Button appearance="primary">Primary</Button>
			<Button appearance="link">Link</Button>
			<Button appearance="subtle">Subtle</Button>
			<Button appearance="ghost">Ghost</Button>
		</ButtonToolbar>

		<RadioGroup inline appearance="picker" value={size} onChange={setSize}>
        <span style={styles.radioGroupLabel}>Size: </span>
        <Radio value="full">Full page</Radio>
        <Radio value="lg">Large</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="sm">Small</Radio>
      </RadioGroup>
      <hr />
      <ButtonToolbar>
        <IconButton icon={<AngleRightIcon />} onClick={() => handleOpen('left')}>
          Left
        </IconButton>
        <IconButton icon={<AngleLeftIcon />} onClick={() => handleOpen('right')}>
          Right
        </IconButton>
        <IconButton icon={<AngleDownIcon />} onClick={() => handleOpen('top')}>
          Top
        </IconButton>
        <IconButton icon={<AngleUpIcon />} onClick={() => handleOpen('bottom')}>
          Bottom
        </IconButton>
      </ButtonToolbar>

      <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph rows={8} />
        </Drawer.Body>
      </Drawer>
	  <Loader />
    </div>
  );
}

export default App;
