import pick from 'lodash/pick';
import reduce from 'lodash/reduce';

const generateDataClass = (name, props, pickedKeys = Object.keys(props)) => {
  const pickedProps = pick(props, pickedKeys);

  return reduce(pickedProps, (result, value, key) => {
    result += ` ${key}`;
    if (typeof value === 'string') {
      result += `=${value}`;
    }

    return result;
  }, name);
};

export default generateDataClass;
