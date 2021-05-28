/*
 * @Author: Hale
 * @Description: 实现 Observable 类
 * @Date: 2020/01/04
 * @LastEditTime : 2020/01/04
 */

class SafeObserver {
  constructor(destination) {
    this.destination = destination;
  }

  next(value) {
    const destination = this.destination;
    if (destination.next && !this.isUnsubscribed) {
      destination.next && destination.next(value);
    }
  }

  error(err) {
    const destination = this.destination;
    if (!this.isUnsubscribed) {
      this.isUnsubscribed = true;
      if (destination.error) {
        destination.error(err);
      }
    }
  }

  complete() {
    const destination = this.destination;
    if (!this.isUnsubscribed) {
      this.isUnsubscribed = true;
      if (destination.complete) {
        destination.complete();
      }
    }
  }
}

class Observable {
  constructor(_subscribe) {
    this._subscribe = _subscribe;
  }

  subscribe(observer) {
    const safeObserver = new SafeObserver(observer);
    return this._subscribe(safeObserver);
  }
}

const simpleObservable = new Observable((observer) => {
  let i = 0;

  const id = setInterval(() => {
    if (i < 10) {
      observer.next(i++);
    } else {
      observer.complete();
      observer.next("stop me!");
      clearInterval(id);
    }
  }, 200);

  return () => {
    console.log("disposed!");
    clearInterval(id);
  };
});

const observer = {
  next: (value) => console.log(`next -> ${value}`),
  error: () => {},
  complete: () => console.log("complete"),
};

console.log("Observable 类");
simpleObservable.subscribe(observer);
