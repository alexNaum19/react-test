import React from "react";
import Select, {components} from 'react-select';
import PinapleImg from '../../static/icons8-pineapple-40.png';
import SpiceImg from '../../static/icons8-spice-40.png';
import CheeseImg from '../../static/icons8-cheese-40.png';
import PizzaImg from '../../static/icons8-pizza-40.png';

const {Option} = components;

const CustomSelectOption = props => {
  const imageBoxClasses = ['image-round-box'];
  if (props.isSelected) imageBoxClasses.push('selected');
  return (
    <Option {...props} value={props.data.id}>
      <div className={imageBoxClasses.join(' ')} style={{marginLeft: 7}}>
        <img className='round-image' src={props.data.src} key={props.data.id} alt={props.data.label}/>
      </div>
    </Option>
  )
};

const CustomSelectValue = props => (
  <div className="image-round-box" style={{justifyContent: 'center'}}>
    <img className='round-image' src={props.data.src} key={props.data.id} alt={props.data.label}/>
  </div>
)

const imagesList = [
  {src: PinapleImg, id: 1, label: 'Pinaple', value: 'Pinaple'},
  {src: SpiceImg, id: 2, label: 'Spice', value: 'Spice'},
  {src: CheeseImg, id: 3, label: 'Cheese', value: 'Cheese'},
  {src: PizzaImg, id: 4, label: 'Pizza', value: 'Pizza'},
];

const customStyles = {
  option: (provided, state) => {
    return {...provided, margin: '0px auto', backgroundColor: '#2c3e50'}
  },
  menu: (provided, state) => {
    return {...provided, width: '88px', backgroundColor: 'transparent', marginTop: 0}
  },
  container: (provided, state) => {
    return {...provided, width: '97px', margin: '0px auto', padding: '5px', backgroundColor: 'transparent', border: 0}
  },
  valueContainer: (provided, state) => {
    return {...provided, backgroundColor: 'transparent', margin: '0px auto', justifyContent: 'center'}
  },
  control: (provided, state) => {
    return {...provided, backgroundColor: 'transparent', border: 0, boxShadow: 'none'};
  }
};

function ChooseImageSelect(props) {
  return (
    <Select
      defaultValue={imagesList [0]}
      options={imagesList}
      onChange={props.onChange}
      styles={customStyles}
      isSearchable={false}
      components={{
        Option: CustomSelectOption,
        SingleValue: CustomSelectValue,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null
      }}
    />
  )
}

export default ChooseImageSelect;
