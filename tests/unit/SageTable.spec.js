import { shallowMount } from '@vue/test-utils';
import SageTable from "@/components/SageTable.vue";

let testee;

beforeEach(() => {
  testee = shallowMount(SageTable, {
      propsData: {
        sageRecords: [
          {Blg: '1'}, 
          {Blg: '1'},
          {Blg: '2'},
          {Blg: '2'},
          {Blg: '2'},
          {Blg: '3'},
          {Blg: '3'}
        ]
      },
      mocks: {},
      stubs: {},
      methods: {},
  });
});

afterEach(() => {
  testee.destroy();
});

describe('SageTable initial state', () => {
    test('is a Vue instance', () => {
      expect(testee.isVueInstance).toBeTruthy();
    });
    test('all columns exist', () => {
      const columns = testee.findAll('table thead tr th')

      expect(columns.at(0).text()).toEqual('Blg');
      expect(columns.at(1).text()).toEqual('Datum');
      expect(columns.at(2).text()).toEqual('Kto');
      expect(columns.at(3).text()).toEqual('S/H');
      expect(columns.at(4).text()).toEqual('GKto');
      expect(columns.at(5).text()).toEqual('SId');
      expect(columns.at(6).text()).toEqual('SIdx');
      expect(columns.at(7).text()).toEqual('KIdx');
      expect(columns.at(8).text()).toEqual('BTyp');
      expect(columns.at(9).text()).toEqual('MTyp');
      expect(columns.at(10).text()).toEqual('Code');
      expect(columns.at(11).text()).toEqual('Netto');
      expect(columns.at(12).text()).toEqual('Steuer');
      expect(columns.at(13).text()).toEqual('FW-Betrag');
      expect(columns.at(14).text()).toEqual('Tx1');
      expect(columns.at(15).text()).toEqual('Tx2');
    });
  });

  describe('SageTable records', () => {
    test ('has 8 rows', () => {   
      expect(testee.findAll('table > tr').length).toBe(7)  ;
    })
    test ('not even receipt rows have grey backround', () => {    
      expect(testee.findAll('table > tr').at(0).attributes().style).toContain('background-color: rgb(242, 242, 242);'); // Recept 1
      expect(testee.findAll('table > tr').at(1).attributes().style).toContain('background-color: rgb(242, 242, 242);'); // Recept 1
      expect(testee.findAll('table > tr').at(5).attributes().style).toContain('background-color: rgb(242, 242, 242);'); // Recept 3
      expect(testee.findAll('table > tr').at(6).attributes().style).toContain('background-color: rgb(242, 242, 242);'); // Recept 3
    })
    test ('even receipt rows have white backround', () => {     
      expect(testee.findAll('table > tr').at(2).attributes().style).toContain('background-color: white;'); // Recept 2
      expect(testee.findAll('table > tr').at(3).attributes().style).toContain('background-color: white;'); // Recept 2
      expect(testee.findAll('table > tr').at(4).attributes().style).toContain('background-color: white;'); // Recept 2
    })

  });