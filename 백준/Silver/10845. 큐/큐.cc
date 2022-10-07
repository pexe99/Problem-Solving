#include <iostream>
#include <queue>
using namespace std;

int main() {
	int N, input;
	string command;

	cin >> N;

	queue<int> q;
	while (N--) {
		cin >> command;
		if (command == "push") {
			cin >> input;
			q.push(input);
		}
		else if (command == "pop") {
			if (q.empty()) cout << -1 << "\n";
			else {
				cout << q.front() << "\n";
				q.pop();
			}
		}
		else if (command == "size") {
			cout << q.size() << "\n";
		}
		else if (command == "empty") {
			if (q.empty()) cout << 1 << "\n";
			else cout << 0 << "\n";
		}
		else if (command == "front") {
			if (q.empty()) cout << -1 << "\n";
			else cout << q.front() << "\n";
		}
		else if (command == "back") {
			if (q.empty()) cout << -1 << "\n";
			else cout << q.back() << "\n";
		}
	}
}