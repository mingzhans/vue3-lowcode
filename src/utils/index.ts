/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
 export function deepClone<T>(instance : T) : T {
  if ( instance == null){
      return instance;
  }
  // handle Dates
  if (instance instanceof Date) {
      return new Date(instance.getTime()) as any;
  }
  // handle Array types
  if (instance instanceof Array){
      var cloneArr = [] as any[];
      (instance as any[]).forEach((value)  => {cloneArr.push(value)});
      // for nested objects
      return cloneArr.map((value: any) => deepClone<any>(value)) as any;
  }
  // handle objects
  if (instance instanceof Object) {
      var copyInstance = { ...(instance as { [key: string]: any }
      ) } as { [key: string]: any };
      for (var attr in instance) {
          if ( (instance as Object).hasOwnProperty(attr))
              copyInstance[attr] = deepClone<any>(instance[attr]);
      }
      return copyInstance as T;
  }
  // handling primitive data types
  return instance;
}

function generateId() {
  let id = 100
  return function () {
    return id ++
  }
}

export const idGenerate = generateId()