import React from 'react';
import renderer from 'react-test-renderer';
import ToBuyList from '../src/screens/tobuyList';

test('render of To Buy List is correclty', () => {
  const rendered = renderer.create(<ToBuyList />).toJSON();
  expect(rendered).toMatchSnapshot();
  expect(rendered).toBeTruthy();
});

it('function and state on change search text box and add new item',()=>{
    let tobuyListData = renderer.create(<ToBuyList/>).getInstance();

    tobuyListData.onHandleChangeSearchTextBox("H")

    expect(tobuyListData.state.search_value).toEqual("H")

    // after adding new item into tobuyList, checking the length of tobuyList array of object

    tobuyListData.addToBuyList()

    expect(tobuyListData.state.to_buy_data.length).toEqual(4)

    expect(tobuyListData.state.to_buy_data.length).toBeGreaterThan(tobuyListData.state.to_buy_data.length - 1);

    // checking type of generated item name
    expect(typeof tobuyListData.generateRandomText()).toBe("string")
});



const toBuyListData = [
    {
        id: 1,
        item_name: "Hair Spray",
    },
    {
        id: 2,
        item_name: "Lotion",
    },
    {
        id: 3,
        item_name: "Nature Pack"
    }
];

test('It should contain ids 1 and 2', () => {
  expect(toBuyListData).toEqual(
    expect.arrayContaining([
      expect.objectContaining({id: 1}),
      expect.objectContaining({id: 2})
    ])
  );
});

test('function filter value from data',()=>{
    let tobuyListData = renderer.create(<ToBuyList/>).getInstance();

    expect( tobuyListData.getFilterData(toBuyListData,"H") ).toEqual( 
        expect.arrayContaining([ 
          expect.objectContaining(
            {
                id: 1,
                item_name: "Hair Spray",
            }
          )
        ])
      );
});