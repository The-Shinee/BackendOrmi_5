package Java.Test;

class Main {
  private int count = 0;

  synchronized public void increment() {
    count++;
    System.out.println(Thread.currentThread().getName() + " incremented count to: " + count);
  }

  synchronized public int getCount() {
    return count;
  }

  public static void main(String[] args) throws InterruptedException {
    Main counter = new Main();

    // 두 개의 스레드 생성
    Thread thread1 = new Thread(() -> {
      for (int i = 0; i < 100000; i++) {
        counter.increment();
      }
    }, "Thread 1");

    Thread thread2 = new Thread(() -> {
      for (int i = 0; i < 100000; i++) {
        counter.increment();
      }
    }, "Thread 2");

    thread1.start();
    thread2.start();

    // 스레드가 종료될 때까지 대기
    thread1.join();
    thread2.join();

    // 결과 출력
    System.out.println("Final count: " + counter.getCount());
  }
}