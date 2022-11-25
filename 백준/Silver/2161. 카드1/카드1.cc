#include <iostream>
#include <deque>
using namespace std;

int N;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;

	deque<int> d;

	while (N--) {
		d.push_front(N + 1);
	}

	while (!d.empty()) {
		cout << d.front() << " ";
		d.pop_front();
		if (d.empty()) break;
		d.push_back(d.front());
		d.pop_front();
	}
	cout << "\n";

	return 0;
}