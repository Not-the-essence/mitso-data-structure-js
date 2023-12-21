const { NotImplementedError } = require('../extensions/index.js');

function ListNode(x) {
  this.value = x
  this.next = null
}

module.exports = function removeKFromList(l, k) {
  let dummy = new ListNode()
  dummy.next = l
  let current = dummy
  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return dummy.next
}
