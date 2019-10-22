import { shallowMount } from '@vue/test-utils';
import App from '@/App';
import FileUploader from "@/components/FileUploader.vue";

let testee;

beforeEach(() => {
  testee = shallowMount(App, {
      propsData: {},
      mocks: {},
      stubs: {},
      methods: {},
  });
});

afterEach(() => {
  testee.destroy();
});

describe('App initial state', () => {
  test('is a Vue instance', () => {
    expect(testee.isVueInstance).toBeTruthy();
  });
  test ('is FileUploader initially visible', () => {
    expect(testee.find({ name: "FileUploader" }).isVisible()).toBeTruthy();
  })
  test ('is BananaTable initially not visible', () => {
    expect(testee.find({ name: "BananaTable" }).isVisible()).toBeFalsy();
  })
  test ('is BananaConverter initially not visible', () => {
    expect(testee.find({ name: "BananaConverter" }).isVisible()).toBeFalsy();
  })
  test ('is SageTable initially not visible', () => {
    expect(testee.find({ name: "SageTable" }).isVisible()).toBeFalsy();
  })
  test ('is FileDownloader initially not visible', () => {
    expect(testee.find({ name: "FileDownloader" }).isVisible()).toBeFalsy();
  })
});

describe('Upload Banana recoreds', () => {
  test('Banana table is shown after upload', () => {     
    testee.find(FileUploader).vm.$emit("uploaded", [ {"uuid": "1ff1325d-8549-490b-9750-ddf05afc90a4", "integratedTransactions": [] } ] );
    expect(testee.find({ name: "BananaTable" }).isVisible()).toBeTruthy();
  });
});

describe('Loading overlay', () => {
  test('Loading overlay is initially not visible', () => {
    expect(testee.find(".loading").isVisible()).toBeFalsy();
  });

  test('Loading overlay is shown by the event "startUpload"', () => {
    testee.find(FileUploader).vm.$emit("startUpload");
    expect(testee.find(".loading").isVisible()).toBeTruthy();
  });

  test('Loading overlay is hidden after validation', () => {
    testee.setData({isLoading: true})
    expect(testee.find(".loading").isVisible()).toBeTruthy();
    testee.find(FileUploader).vm.$emit("validated", []);
    expect(testee.find(".loading").isVisible()).toBeFalsy();
  });
});