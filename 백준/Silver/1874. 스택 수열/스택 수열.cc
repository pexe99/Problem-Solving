#include <iostream>
#include <vector>
#include <stack>
#include <string>
#include <algorithm>
using namespace std;

int main() {
	stack<int> s;
	vector<int> v;

	int N;
	cin >> N;
	for (int i = 0; i < N; i++) {
		int input;
		cin >> input;
		v.push_back(input - 1);
	}

	vector<string> result;
	int index = 0;
	int vIndex = 0;
	while (true) {
		if (index == N && vIndex != N && s.top() != v[vIndex]) {
			result.clear();
			result.push_back("NO");
			break;
		}
		if (vIndex == N && index == N) {
			break;
		}
		else if (s.empty()) {
			s.push(index);
			index++;
			result.push_back("+");
		}
		else if (s.top() == v[vIndex]) {
			s.pop();
			vIndex++;
			result.push_back("-");
		}
		else {
			s.push(index);
			index++;
			result.push_back("+");
		}
	}

	for (int i = 0; i < result.size(); i++) {
		cout << result[i] << "\n";
	}
}