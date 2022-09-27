#include <iostream>
#include <utility>
#include <deque>
using namespace std;

int main() {
	int n, m;

	cin >> n >> m;

	deque<int> temp;
	deque<deque<int>> d(n, temp);

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			int input;
			cin >> input;
			d[i].push_back(input);
		}
	}

	int counter = 0;
	int max = 0;

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			pair<int, int> p;
			p.first = i;
			p.second = j;
			deque<pair<int, int>> queue;
			queue.push_back(p);
			int size = 0;
			if (d[p.first][p.second] == 1) {
				while (!queue.empty()) {
					p = queue.front();
					queue.pop_front();
					d[p.first][p.second] = 0;
					size++;
					pair<int, int> p2;
					if (p.first > 0 && d[p.first - 1][p.second] == 1) {
						p2.first = p.first - 1;
						p2.second = p.second;
						d[p2.first][p2.second] = 0;
						queue.push_back(p2);
					}
					if (p.first < n-1 && d[p.first + 1][p.second] == 1) {
						p2.first = p.first + 1;
						p2.second = p.second;
						d[p2.first][p2.second] = 0;
						queue.push_back(p2);
					}
					if (p.second > 0 && d[p.first][p.second - 1] == 1) {
						p2.first = p.first;
						p2.second = p.second - 1;
						d[p2.first][p2.second] = 0;
						queue.push_back(p2);
					}
					if (p.second < m-1 && d[p.first][p.second + 1] == 1) {
						p2.first = p.first;
						p2.second = p.second + 1;
						d[p2.first][p2.second] = 0;
						queue.push_back(p2);
					}
				}
				if (max < size) max = size;
				counter++;
			}
		}
	}
	cout << counter << "\n" << max << "\n";
}