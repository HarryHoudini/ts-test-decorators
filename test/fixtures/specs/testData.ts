import { suite } from 'mocha-typescript';
import { data } from '../../../index';

@suite
class TestData {
  @data(testData())
  @data.withCustomTestName(value => `shouldCall${value}DataOnTest`)
  shouldCallDataOnTest(value) {}

  @data('')
  shouldNotBeExecuted(value) {}
}

function testData() {
  return 'Test';
}
