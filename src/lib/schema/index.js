/**
* 通过async-validate实现表单
*/

import Schema from 'async-validator'

/**
* 验证
* @param descriptor 验证规则
* @param formData 校验数据
* @param data 签名数据
*/
const formValidator = (descriptor, formData) => {
  const validator = new Schema(descriptor)
  validator.validate(formData, (errors, fields) => {
    if (errors) {
      // validation failed, errors is an array of all errors
      // fields is an object keyed by field name with an array of
      // errors per field
      return handleErrors(errors, fields) //eslint-disable-line
    }
    // validation passed
  })
}

export default {
  formValidator
}
