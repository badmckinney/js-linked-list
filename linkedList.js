/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {

  let head = null;
  let tail = null;

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const add = (value) => {
    if (head === null) {
      head = {};
      head.value = value;
      head.next = null;
      tail = head
      return head;
    } else {
      let added = {};
      tail.next = added;
      added.value = value;
      added.next = null;
      tail = added;
      return added;
    }
  };

  const get = (n) => {
    let node = getHead();
    if (n < 0) {
      return false;
    } else {
      for (let i = 0; i < n; i++) {
        if (node.next === null) {
          return false;
        }
        node = node.next;
      }
      return node;
    }
  };

  const remove = (n) => {
    if (n === 0) {
      head = head.next;
    } else if (get(n) === tail) {
      get(n - 1).next = null;
      tail = get(n - 1);
    } else if (get(n) === false) {
      return false
    } else {
      get(n - 1).next = get(n + 1);
    }
  };

  const insert = (value, n) => {
    let added = {};
    added.value = value;
    let before = get(n - 1);

    if (n === 0) {
      added.next = head;
      head = added;

    } else if (get(n) === false) {
      console.log('running right');
      return false;

    } else {
      console.log('running wrong')
      added.next = get(n);
      before.next = added;
    }
  };

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  }
}