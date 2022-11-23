#include <iostream>
#include <queue>
using namespace std;

int N, x;
priority_queue<int> q;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> N;
	while (N--) {
		cin >> x;
		if (x == 0) {
			if (q.empty()) cout << 0 << "\n";
			else {
				cout << q.top() * -1 << "\n";
				q.pop();
			}
		}
		else {
			q.push(x * -1);
		}	
	}

	return 0;
}