#include <iostream>
#include <deque>
#include <vector>
using namespace std;

int T, N, M, value, target, counter;
deque<int> queue;
vector<int> importance;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> T;
	while (T--) {
		cin >> N >> M;

		vector<int> importanceCounter(10, 0);
		for (int i = 0; i < N; i++) {
			queue.push_back(i);
			cin >> value;
			importance.push_back(value);
			importanceCounter[value]++;
		}
		target = M;

		while (true) {
			bool canPrint = true;
			for (int i = importance[queue.front()] + 1; i <= 9; i++) {
				if (importanceCounter[i] != 0) {
					canPrint = false;
					break;
				}
			}

			if (canPrint) {
				counter++;
				importanceCounter[importance[queue.front()]]--;
				if (queue.front() == target) {
					break;
				}
				queue.pop_front();
			}
			else {
				queue.push_back(queue.front());
				queue.pop_front();
			}
		}

		cout << counter << "\n";

		queue.clear();
		importance.clear();
		counter = 0;
	}
}