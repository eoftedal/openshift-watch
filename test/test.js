import { expect } from 'chai';
import OpenshiftWatch from '../src/index';

const options = {
  url: process.env.KUBE_API_SERVER
}

if (!options.url) {
  throw new Error('Please provide KUBE_API_SERVER environment variable');
}

describe('watch', function () {
  it('should throw an error: missing URL', () => {
    expect(() => {
      new OpenshiftWatch();
    }).to.throw(/missing Kubernetes API URL/i);
  });

  it('should throw an error: unknown resource name', () => {
    expect(() => {
      new OpenshiftWatch('foobar', options);
    }).to.throw(/Unknown resource/i);
  });
});
